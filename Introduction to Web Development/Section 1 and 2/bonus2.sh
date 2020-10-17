#!/bin/bash

claro=$*

if [ -f $claro ]
then
    echo "$claro é um arquivo comum"
elif [ -d $claro ]
then
    echo "$claro é um diretorio"
else
    echo "$claro é um outro tipo de arquivo!"
fi


tim=$claro
ls -l $tim