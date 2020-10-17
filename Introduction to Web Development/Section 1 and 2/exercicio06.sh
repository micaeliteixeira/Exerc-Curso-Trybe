#!/bin/bash

ENT= $1 #O $1 É UM ARGUMENTO, SERVE PARA QUE O USUARIO JÁ DO LADO DA EX.DO ARQ. DIGITE A ENTRADA

if [ -f $ENT ]
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
ls -l $FIM
