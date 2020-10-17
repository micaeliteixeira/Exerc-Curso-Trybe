#!/bin/bash

VAR="/home/micaeli/Trybe/Shell/exercicio04.sh"

if [ -e $VAR ]
then
    echo "O caminho $VAR está habilitado!"
fi
if [ -w $VAR ]
then 
    echo "Você tem permissão para editar $VAR" 
else
    echo "Você NÃO esta autorizado a editar $VAR"
fi