$(document).ready(function(){
			$('button').click(function(){
				const name = $('#nameid').val();
				// alert(name);
				$('.imgchange').attr('src',`https://joeschmoe.io/api/v1/${name}`);
			});
		});
