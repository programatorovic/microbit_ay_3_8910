# AY-3-8910 Control

Rozšírenie pre ovládanie zvukového procesora AY-3-8910 cez Micro:bit.

## Bloky

### Send Data
Pošle zadané údaje na zvolený register procesora AY-3-8910 cez zadané výstupné porty.

- **Reg**: Číselný parameter obsahujúci číslo registra (0-15).
- **Data**: Číselný parameter obsahujúci hodnotu bajtu (0-255).
- **BDIR, BC1, BC2**: Riadiace signály na správu zbernice čipu AY-3-8910.
- **D7 až D0**: Výstupné digitálne porty Micro:bitu, ktoré budú použité na odoslanie jednotlivých bitov.

### Reset Chip
Inicializuje čip AY-3-8910 nastavením riadiacich signálov.

- **BDIR, BC1, BC2**: Riadiace signály na správu zbernice čipu AY-3-8910.
