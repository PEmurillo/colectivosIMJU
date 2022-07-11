$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .categoryItem[category="all"]').addClass('ct_itemActive');

        $('.categoryItem').click(function(){
            var catProduct = $(this).attr('category');
            console.log(catProduct);

            //AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO ================
            $('.categoryItem').removeClass('ct_itemActive');
            $(this).addClass('ct_itemActive');

            //OCULTANDO PRODUCTOS =============================================
            $('.product-item').hide();

            //MOSTRANDO PRODUCTOS =============================================
            $('.product-item[category="'+catProduct+'"]').show();
        });

        $('.categoryItem[category="all"]').click(function(){
            $('.product-item').show();
        });

    });