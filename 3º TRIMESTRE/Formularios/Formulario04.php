<?php  
function rebajas($base,$dto=0) {
         $ahorro = ($base*$dto)/100;
         $final = $base-$ahorro;
         return array($ahorro, $final);
         }

$precio = $_POST['precio'];

$descuento = $_POST['des'];

list($rebaja,$precioFinal)=rebajas($precio,$descuento);

echo "Precio inicial: $precio. <br/>";

echo "Los impuestos son: $impuesto. <br>";

echo "Este artículo está rebajado en $rebaja €. <br/>";

echo "Precio final del artículo: $precioFinal €.";
?>
