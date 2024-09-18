(function() 
{

	var actualizar_hora = function() 
	{
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			vaiminutos = fecha.getMinutes(),
			vaisegundos = fecha.getSeconds(),
			vaidiasemana = fecha.getDay(),
			vaidia = fecha.getDate(),
			vaimes = fecha.getMonth(),
			vaianio = fecha.getFullYear();


		var xHoras = document.getElementById('horas'),
			pAMPM = document.getElementById('ampm'),
			xMinutos = document.getElementById('minutos'),
			xSegundos = document.getElementById('segundos'),
			xDiaSemana = document.getElementById('dia_semana'),
			xDia = document.getElementById('dia'),
			xMes = document.getElementById('mes'),
			xAnio = document.getElementById('anio'); 


		var listasemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
		xDiaSemana.textContent = listasemana[vaidiasemana];	

	
		xDia.textContent = vaidia;

		var listames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
		xMes.textContent = listames[vaimes];

		xAnio.textContent = vaianio;


		if (horas >= 12) {
			horas = horas - 12;
			ampm = "PM";	
		}	else {
				ampm = "AM";
		}

		if (horas == 0) {
			horas = 12;
		};
		
		xHoras.textContent = horas;
		pAMPM.textContent = ampm;


		if (vaiminutos < 10){
			vaiminutos = "0" + vaiminutos
		};

		if (vaisegundos < 10) {
			vaisegundos = "0" + vaisegundos

		};


		xMinutos.textContent = vaiminutos;
		xSegundos.textContent = vaisegundos;
	};

	actualizar_hora();
	var intervalo = setInterval(actualizar_hora, 1000);
}())