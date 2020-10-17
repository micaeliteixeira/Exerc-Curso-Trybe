#!/bin/bash

echo "Qual é o seu caminho ou arquivo?"
read ENT

if [ -f $ENT ]   #-f para arquivos e -d para diretório
then
    echo "$ENT é um arquivo comum!"
elif [ -d $ENT ]
then
    echo "$ENT é um diretório!"
else
    echo "$ENT é um outro tipo de arquivo!"
fi

echo " "

FIM=$ENT    
ls -l $FIM  #COMANDO PARA LISTAGEM COMPLETA DO QUE TEM DENTRO DA PASTA RELACIONADO AO ENT