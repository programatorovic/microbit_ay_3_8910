//% color="#AA278D" weight=100 icon="\uf001" block="AY-3-8910 Control"
namespace ay8910 {
    //% blockId=ay8910SendData block="Send Data Reg %reg|Data %data|BC1 %bc1|BC2 %bc2|BDIR %bdir|D7 %d7|D6 %d6|D5 %d5|D4 %d4|D3 %d3|D2 %d2|D1 %d1|D0 %d0"
    //% reg.min=0 reg.max=15
    //% data.min=0 data.max=255
    export function sendData(reg: number, data: number, bc1: DigitalPin, bc2: DigitalPin, bdir: DigitalPin, d7: DigitalPin, d6: DigitalPin, d5: DigitalPin, d4: DigitalPin, d3: DigitalPin, d2: DigitalPin, d1: DigitalPin, d0: DigitalPin): void {
        // Nastaviť registre čipu AY-3-8910
        sendByte(reg, bc1, bc2, bdir, d7, d6, d5, d4, d3, d2, d1, d0);
        control.waitMicros(1); // Časové oneskorenie na stabilizáciu signálu

        // Nastaviť údaje do registrov čipu AY-3-8910
        sendByte(data, bc1, bc2, bdir, d7, d6, d5, d4, d3, d2, d1, d0);
    }

    function sendByte(data: number, bc1: DigitalPin, bc2: DigitalPin, bdir: DigitalPin, d7: DigitalPin, d6: DigitalPin, d5: DigitalPin, d4: DigitalPin, d3: DigitalPin, d2: DigitalPin, d1: DigitalPin, d0: DigitalPin): void {
        // Nastaviť riadiace signály
        pins.digitalWritePin(bc1, 0);
        pins.digitalWritePin(bc2, 0);
        pins.digitalWritePin(bdir, 1);

        // Odoslať dáta na piny
        pins.digitalWritePin(d7, (data & 0x80) ? 1 : 0);
        pins.digitalWritePin(d6, (data & 0x40) ? 1 : 0);
        pins.digitalWritePin(d5, (data & 0x20) ? 1 : 0);
        pins.digitalWritePin(d4, (data & 0x10) ? 1 : 0);
        pins.digitalWritePin(d3, (data & 0x08) ? 1 : 0);
        pins.digitalWritePin(d2, (data & 0x04) ? 1 : 0);
        pins.digitalWritePin(d1, (data & 0x02) ? 1 : 0);
        pins.digitalWritePin(d0, (data & 0x01) ? 1 : 0);

        // Aktivovať riadiace signály pre zápis
        pins.digitalWritePin(bc1, 1);
        pins.digitalWritePin(bc2, 1);
        pins.digitalWritePin(bdir, 1);
        control.waitMicros(1); // Časové oneskorenie pre zápis

        // Deaktivovať riadiace signály
        pins.digitalWritePin(bc1, 0);
        pins.digitalWritePin(bc2, 0);
        pins.digitalWritePin(bdir, 0);
    }
}
