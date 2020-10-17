#!/bin/bash

VAR= $2

if [ -d $VAR ]
then
    echo "O argumento $VAR não é um diretório!"
else
    VARIAVEL= ls -l $VAR | wc -l #LISTAGEM DO QUE TEM E QUANTIDADE DE LINHAS
    echo "O $VAR ten $VARIAVEL arquivos"! 
fi