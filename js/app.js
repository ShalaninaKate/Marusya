// // //let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
// let forms = document.querySelectorAll('form');
// if (forms.length > 0) {
// 	for (let index = 0; index < forms.length; index++) {
// 		const el = forms[index];
// 		el.addEventListener('submit', form_submit);
// 	}
// }
// async function form_submit(e) {
// 	let btn = e.target;
// 	let form = btn.closest('form');
// 	let error = form_validate(form);
// 	if (error == 0) {
// 		let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
// 		let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
// 		const message = form.getAttribute('data-message');
// 		const ajax = form.getAttribute('data-ajax');

// 		//SendForm
// 		if (ajax) {
// 			e.preventDefault();
// 			let formData = new FormData(form);
// 			form.classList.add('_sending');
// 			let response = await fetch(formAction, {
// 				method: formMethod,
// 				body: formData
// 			});
// 			if (response.ok) {
// 				let result = await response.json();
// 				form.classList.remove('_sending');
// 				if (message) {
// 					popup_open(message + '-message');
// 				}
// 				form_clean(form);
// 			} else {
// 				alert("Ошибка");
// 				form.classList.remove('_sending');
// 			}
// 		}
// 		// If test
// 		if (form.hasAttribute('data-test')) {
// 			e.preventDefault();
// 			if (message) {
// 				popup_open(message + '-message');
// 			}
// 			form_clean(form);
// 		}
// 	} else {
// 		let form_error = form.querySelectorAll('._error');
// 		if (form_error && form.classList.contains('_goto-error')) {
// 			_goto(form_error[0], 1000, 50);
// 		}
// 		e.preventDefault();
// 	}
// }
// function _is_hidden(el) {
// 	return (el.offsetParent === null)
// }

// function form_validate(form) {
// 	let error = 0;
// 	let form_req = form.querySelectorAll('._req');
// 	if (form_req.length > 0) {
// 		for (let index = 0; index < form_req.length; index++) {
// 			const el = form_req[index];
// 			if (!_is_hidden(el)) {
// 				error += form_validate_input(el);
// 			}
// 		}
// 	}
// 	return error;
// }
// function form_validate_input(input) {
// 	let error = 0;
// 	let input_g_value = input.getAttribute('data-value');

// 	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
// 		if (input.value != input_g_value) {
// 			let em = input.value.replace(" ", "");
// 			input.value = em;
// 		}
// 		if (email_test(input) || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
// 		form_add_error(input);
// 		error++;
// 	} else {
// 		if (input.value == '' || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	}
// 	return error;
// }
// function form_add_error(input) {
// 	input.classList.add('_error');
// 	input.parentElement.classList.add('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// 	let input_error_text = input.getAttribute('data-error');
// 	if (input_error_text && input_error_text != '') {
// 		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
// 	}
// }
// function form_remove_error(input) {
// 	input.classList.remove('_error');
// 	input.parentElement.classList.remove('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// }
// function form_clean(form) {
// 	let inputs = form.querySelectorAll('input,textarea');
// 	for (let index = 0; index < inputs.length; index++) {
// 		const el = inputs[index];
// 		el.parentElement.classList.remove('_focus');
// 		el.classList.remove('_focus');
// 		el.value = el.getAttribute('data-value');
// 	}
// 	let checkboxes = form.querySelectorAll('.checkbox__input');
// 	if (checkboxes.length > 0) {
// 		for (let index = 0; index < checkboxes.length; index++) {
// 			const checkbox = checkboxes[index];
// 			checkbox.checked = false;
// 		}
// 	}
// 	let selects = form.querySelectorAll('select');
// 	if (selects.length > 0) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_default_value = select.getAttribute('data-default');
// 			select.value = select_default_value;
// 			select_item(select);
// 		}
// 	}
// }

// //viewPass
// let viewPass = document.querySelectorAll('._viewpass');
// for (let index = 0; index < viewPass.length; index++) {
// 	const element = viewPass[index];
// 	element.addEventListener("click", function (e) {
// 		if (element.classList.contains('_active')) {
// 			element.parentElement.querySelector('input').setAttribute("type", "password");
// 		} else {
// 			element.parentElement.querySelector('input').setAttribute("type", "text");
// 		}
// 		element.classList.toggle('_active');
// 	});
// }

// //Select
// // let selects = document.getElementsByTagName('select');
// // if (selects.length > 0) {
// // 	selects_init();
// // }
// // function selects_init() {
// // 	for (let index = 0; index < selects.length; index++) {
// // 		const select = selects[index];
// // 		select_init(select);
// // 	}
// // 	//select_callback();
// // 	document.addEventListener('click', function (e) {
// // 		selects_close(e);
// // 	});
// // 	document.addEventListener('keydown', function (e) {
// // 		if (e.code === 'Escape') {
// // 			selects_close(e);
// // 		}
// // 	});
// // }
// // function selects_close(e) {
// // 	const selects = document.querySelectorAll('.select');
// // 	if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
// // 		for (let index = 0; index < selects.length; index++) {
// // 			const select = selects[index];
// // 			const select_body_options = select.querySelector('.select__options');
// // 			select.classList.remove('_active');
// // 			_slideUp(select_body_options, 100);
// // 		}
// // 	}
// // }
// // function select_init(select) {
// // 	const select_parent = select.parentElement;
// // 	const select_modifikator = select.getAttribute('class');
// // 	const select_selected_option = select.querySelector('option:checked');
// // 	select.setAttribute('data-default', select_selected_option.value);
// // 	select.style.display = 'none';

// // 	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

// // 	let new_select = select.parentElement.querySelector('.select');
// // 	new_select.appendChild(select);
// // 	select_item(select);
// // }
// // function select_item(select) {
// // 	const select_parent = select.parentElement;
// // 	const select_items = select_parent.querySelector('.select__item');
// // 	const select_options = select.querySelectorAll('option');
// // 	const select_selected_option = select.querySelector('option:checked');
// // 	const select_selected_text = select_selected_option.text;
// // 	const select_type = select.getAttribute('data-type');

// // 	if (select_items) {
// // 		select_items.remove();
// // 	}

// // 	let select_type_content = '';
// // 	if (select_type == 'input') {
// // 		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Поле является обязательным" data-value="' + select_selected_text + '" class="select__input"></div>';
// // 	} else {
// // 		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
// // 	}

// // 	select_parent.insertAdjacentHTML('beforeend',
// // 		'<div class="select__item">' +
// // 		'<div class="select__title">' + select_type_content + '</div>' +
// // 		'<div hidden class="select__options">' + select_get_options(select_options) + '</div>' +
// // 		'</div></div>');

// // 	select_actions(select, select_parent);
// // }
// // function select_actions(original, select) {
// // 	const select_item = select.querySelector('.select__item');
// // 	const selectTitle = select.querySelector('.select__title');
// // 	const select_body_options = select.querySelector('.select__options');
// // 	const select_options = select.querySelectorAll('.select__option');
// // 	const select_type = original.getAttribute('data-type');
// // 	const select_input = select.querySelector('.select__input');

// // 	selectTitle.addEventListener('click', function (e) {
// // 		selectItemActions();
// // 	});

// // 	function selectMultiItems() {
// // 		let selectedOptions = select.querySelectorAll('.select__option');
// // 		let originalOptions = original.querySelectorAll('option');
// // 		let selectedOptionsText = [];
// // 		for (let index = 0; index < selectedOptions.length; index++) {
// // 			const selectedOption = selectedOptions[index];
// // 			originalOptions[index].removeAttribute('selected');
// // 			if (selectedOption.classList.contains('_selected')) {
// // 				const selectOptionText = selectedOption.innerHTML;
// // 				selectedOptionsText.push(selectOptionText);
// // 				originalOptions[index].setAttribute('selected', 'selected');
// // 			}
// // 		}
// // 		select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
// // 	}
// // 	function selectItemActions(type) {
// // 		if (!type) {
// // 			let selects = document.querySelectorAll('.select');
// // 			for (let index = 0; index < selects.length; index++) {
// // 				const select = selects[index];
// // 				const select_body_options = select.querySelector('.select__options');
// // 				if (select != select_item.closest('.select')) {
// // 					select.classList.remove('_active');
// // 					_slideUp(select_body_options, 100);
// // 				}
// // 			}
// // 			_slideToggle(select_body_options, 100);
// // 			select.classList.toggle('_active');
// // 		}
// // 	}
// // 	for (let index = 0; index < select_options.length; index++) {
// // 		const select_option = select_options[index];
// // 		const select_option_value = select_option.getAttribute('data-value');
// // 		const select_option_text = select_option.innerHTML;

// // 		if (select_type == 'input') {
// // 			select_input.addEventListener('keyup', select_search);
// // 		} else {
// // 			if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
// // 				select_option.style.display = 'none';
// // 			}
// // 		}
// // 		select_option.addEventListener('click', function () {
// // 			for (let index = 0; index < select_options.length; index++) {
// // 				const el = select_options[index];
// // 				el.style.display = 'block';
// // 			}
// // 			if (select_type == 'input') {
// // 				select_input.value = select_option_text;
// // 				original.value = select_option_value;
// // 			} else {
// // 				if (original.hasAttribute('multiple')) {
// // 					select_option.classList.toggle('_selected');
// // 					selectMultiItems();
// // 				} else {
// // 					select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
// // 					original.value = select_option_value;
// // 					select_option.style.display = 'none';
// // 				}
// // 			}
// // 			let type;
// // 			if (original.hasAttribute('multiple')) {
// // 				type = 'multiple';
// // 			}
// // 			selectItemActions(type);
// // 		});
// // 	}
// // }
// // function select_get_options(select_options) {
// // 	if (select_options) {
// // 		let select_options_content = '';
// // 		for (let index = 0; index < select_options.length; index++) {
// // 			const select_option = select_options[index];
// // 			const select_option_value = select_option.value;
// // 			if (select_option_value != '') {
// // 				const select_option_text = select_option.innerHTML;
// // 				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
// // 			}
// // 		}
// // 		return select_options_content;
// // 	}
// // }
// // function select_search(e) {
// // 	let select_block = e.target.closest('.select ').querySelector('.select__options');
// // 	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
// // 	let select_search_text = e.target.value.toUpperCase();

// // 	for (let i = 0; i < select_options.length; i++) {
// // 		let select_option = select_options[i];
// // 		let select_txt_value = select_option.textContent || select_option.innerText;
// // 		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
// // 			select_option.style.display = "";
// // 		} else {
// // 			select_option.style.display = "none";
// // 		}
// // 	}
// // }
// // function selects_update_all() {
// // 	let selects = document.querySelectorAll('select');
// // 	if (selects) {
// // 		for (let index = 0; index < selects.length; index++) {
// // 			const select = selects[index];
// // 			select_item(select);
// // 		}
// // 	}
// // }

// //Placeholers
// let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
// inputs_init(inputs);

// function inputs_init(inputs) {
// 	if (inputs.length > 0) {
// 		for (let index = 0; index < inputs.length; index++) {
// 			const input = inputs[index];
// 			const input_g_value = input.getAttribute('data-value');
// 			input_placeholder_add(input);
// 			if (input.value != '' && input.value != input_g_value) {
// 				input_focus_add(input);
// 			}
// 			input.addEventListener('focus', function (e) {
// 				if (input.value == input_g_value) {
// 					input_focus_add(input);
// 					input.value = '';
// 				}
// 				if (input.getAttribute('data-type') === "pass") {
// 					if (input.parentElement.querySelector('._viewpass')) {
// 						if (!input.parentElement.querySelector('._viewpass').classList.contains('_active')) {
// 							input.setAttribute('type', 'password');
// 						}
// 					} else {
// 						input.setAttribute('type', 'password');
// 					}
// 				}
// 				if (input.classList.contains('_date')) {
// 					/*
// 					input.classList.add('_mask');
// 					Inputmask("99.99.9999", {
// 						//"placeholder": '',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						}
// 					}).mask(input);
// 					*/
// 				}
// 				if (input.classList.contains('_phone')) {
// 					//'+7(999) 999 9999'
// 					//'+38(999) 999 9999'
// 					//'+375(99)999-99-99'
// 					input.classList.add('_mask');
// 					Inputmask("+375 (99) 9999999", {
// 						//"placeholder": '',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						}
// 					}).mask(input);
// 				}
// 				if (input.classList.contains('_digital')) {
// 					input.classList.add('_mask');
// 					Inputmask("9{1,}", {
// 						"placeholder": '',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						}
// 					}).mask(input);
// 				}
// 				form_remove_error(input);
// 			});
// 			input.addEventListener('blur', function (e) {
// 				if (input.value == '') {
// 					input.value = input_g_value;
// 					input_focus_remove(input);
// 					if (input.classList.contains('_mask')) {
// 						input_clear_mask(input, input_g_value);
// 					}
// 					if (input.getAttribute('data-type') === "pass") {
// 						input.setAttribute('type', 'text');
// 					}
// 				}
// 			});
// 			if (input.classList.contains('_date')) {
// 				const calendarItem = datepicker(input, {
// 					customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
// 					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
// 					overlayButton: 'Применить',
// 					overlayPlaceholder: 'Год (4 цифры)',
// 					startDay: 1,
// 					formatter: (input, date, instance) => {
// 						const value = date.toLocaleDateString()
// 						input.value = value
// 					},
// 					onSelect: function (input, instance, date) {
// 						input_focus_add(input.el);
// 					}
// 				});
// 				const dataFrom = input.getAttribute('data-from');
// 				const dataTo = input.getAttribute('data-to');
// 				if (dataFrom) {
// 					calendarItem.setMin(new Date(dataFrom));
// 				}
// 				if (dataTo) {
// 					calendarItem.setMax(new Date(dataTo));
// 				}
// 			}
// 		}
// 	}
// }
// function input_placeholder_add(input) {
// 	const input_g_value = input.getAttribute('data-value');
// 	if (input.value == '' && input_g_value != '') {
// 		input.value = input_g_value;
// 	}
// }
// function input_focus_add(input) {
// 	input.classList.add('_focus');
// 	input.parentElement.classList.add('_focus');
// }
// function input_focus_remove(input) {
// 	input.classList.remove('_focus');
// 	input.parentElement.classList.remove('_focus');
// }
// function input_clear_mask(input, input_g_value) {
// 	input.inputmask.remove();
// 	input.value = input_g_value;
// 	input_focus_remove(input);
// }

// //QUANTITY
// let quantityButtons = document.querySelectorAll('.quantity__button');
// if (quantityButtons.length > 0) {
// 	for (let index = 0; index < quantityButtons.length; index++) {
// 		const quantityButton = quantityButtons[index];
// 		quantityButton.addEventListener("click", function (e) {
// 			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
// 			if (quantityButton.classList.contains('quantity__button_plus')) {
// 				value++;
// 			} else {
// 				value = value - 1;
// 				if (value < 1) {
// 					value = 1
// 				}
// 			}
// 			quantityButton.closest('.quantity').querySelector('input').value = value;
// 		});
// 	}
// }

// //RANGE
// const priceSlider = document.querySelector('.price-filter__slider');
// if (priceSlider) {

// 	let textFrom = priceSlider.getAttribute('data-from');
// 	let textTo = priceSlider.getAttribute('data-to');

// 	noUiSlider.create(priceSlider, {
// 		start: [0, 200000],
// 		connect: true,
// 		tooltips: [wNumb({ decimals: 0, prefix: textFrom + ' ' }), wNumb({ decimals: 0, prefix: textTo + ' ' })],
// 		range: {
// 			'min': [0],
// 			'max': [200000]
// 		}
// 	});

// 	/*
// 	const priceStart = document.getElementById('price-start');
// 	const priceEnd = document.getElementById('price-end');
// 	priceStart.addEventListener('change', setPriceValues);
// 	priceEnd.addEventListener('change', setPriceValues);
// 	*/

// 	function setPriceValues() {
// 		let priceStartValue;
// 		let priceEndValue;
// 		if (priceStart.value != '') {
// 			priceStartValue = priceStart.value;
// 		}
// 		if (priceEnd.value != '') {
// 			priceEndValue = priceEnd.value;
// 		}
// 		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
// 	}
// }

// // let _slideUp = (target, duration = 500) => {
// // 	if (!target.classList.contains('_slide')) {
// // 		target.classList.add('_slide');
// // 		target.style.transitionProperty = 'height, margin, padding';
// // 		target.style.transitionDuration = duration + 'ms';
// // 		target.style.height = target.offsetHeight + 'px';
// // 		target.offsetHeight;
// // 		target.style.overflow = 'hidden';
// // 		target.style.height = 0;
// // 		target.style.paddingTop = 0;
// // 		target.style.paddingBottom = 0;
// // 		target.style.marginTop = 0;
// // 		target.style.marginBottom = 0;
// // 		window.setTimeout(() => {
// // 			target.hidden = true;
// // 			target.style.removeProperty('height');
// // 			target.style.removeProperty('padding-top');
// // 			target.style.removeProperty('padding-bottom');
// // 			target.style.removeProperty('margin-top');
// // 			target.style.removeProperty('margin-bottom');
// // 			target.style.removeProperty('overflow');
// // 			target.style.removeProperty('transition-duration');
// // 			target.style.removeProperty('transition-property');
// // 			target.classList.remove('_slide');
// // 		}, duration);
// // 	}
// // }
// // let _slideDown = (target, duration = 500) => {
// // 	if (!target.classList.contains('_slide')) {
// // 		target.classList.add('_slide');
// // 		if (target.hidden) {
// // 			target.hidden = false;
// // 		}
// // 		let height = target.offsetHeight;
// // 		target.style.overflow = 'hidden';
// // 		target.style.height = 0;
// // 		target.style.paddingTop = 0;
// // 		target.style.paddingBottom = 0;
// // 		target.style.marginTop = 0;
// // 		target.style.marginBottom = 0;
// // 		target.offsetHeight;
// // 		target.style.transitionProperty = "height, margin, padding";
// // 		target.style.transitionDuration = duration + 'ms';
// // 		target.style.height = height + 'px';
// // 		target.style.removeProperty('padding-top');
// // 		target.style.removeProperty('padding-bottom');
// // 		target.style.removeProperty('margin-top');
// // 		target.style.removeProperty('margin-bottom');
// // 		window.setTimeout(() => {
// // 			target.style.removeProperty('height');
// // 			target.style.removeProperty('overflow');
// // 			target.style.removeProperty('transition-duration');
// // 			target.style.removeProperty('transition-property');
// // 			target.classList.remove('_slide');
// // 		}, duration);
// // 	}
// // }
// // let _slideToggle = (target, duration = 500) => {
// // 	if (target.hidden) {
// // 		return _slideDown(target, duration);
// // 	} else {
// // 		return _slideUp(target, duration);
// // 	}
// // }



"use strict"


//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}

window.onload = function () {
	document.addEventListener("click", documentActions);

	// Actions (делегирование события click)
	function documentActions(e) {
		const targetElement = e.target;
		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__burger')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
			}
		}
		
		
	}

	const iconMenu = document.querySelector('.icon-burger');
	const sidenav = document.querySelector('.sidenav');
	const close = document.querySelector('.sidenav__close');
	const wrapper =  document.querySelector('.wrapper');
	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.add('_lock');
			wrapper.classList.add('back');
			iconMenu.classList.add('active');
			sidenav.classList.add('active');
			
		});
		close.addEventListener("click", function (e) {
			document.body.classList.remove('_lock');
			wrapper.classList.remove('back');
			close.classList.remove('active');
			sidenav.classList.remove('active');
		});

	}
	
}


function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}


// Табы =======================================================================================================================================================================================================================


	const tabs = document.querySelectorAll('[data-tabs]');
	let tabsActiveHash = [];

	if (tabs.length > 0) {
		const hash = location.hash.replace('#', '');
		if (hash.startsWith('tab-')) {
			tabsActiveHash = hash.replace('tab-', '').split('-');
		}
		tabs.forEach((tabsBlock, index) => {
			tabsBlock.classList.add('_tab-init');
			tabsBlock.setAttribute('data-tabs-index', index);
			tabsBlock.addEventListener("click", setTabsAction);
			initTabs(tabsBlock);
		});

		// Получение табов с медиа запросами
		const tabsMedia = Array.from(tabs).filter(function (item, index, self) {
			return item.dataset.tabs;
		});
		// Инициализация табов с медиа запросами
		if (tabsMedia.length > 0) {
			initMediaTabs(tabsMedia);
		}
	}
	// Инициализация табов с медиа запросами
	function initMediaTabs(tabsMedia) {
		const breakpointsArray = [];
		tabsMedia.forEach(item => {
			const breakpointValue = item.dataset.tabs;

			const tabsBreakpointsObject = {};
			tabsBreakpointsObject.value = breakpointValue;
			tabsBreakpointsObject.item = item;

			breakpointsArray.push(tabsBreakpointsObject);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return `(max-width:${item.value}px),${item.value}`;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const matchMedia = window.matchMedia(paramsArray[0]);
			const mediaBreakpoint = paramsArray[1];

			// Объекты с нужными условиями
			const tabsMediaArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint) {
					return true;
				}
			});

			// Событие
			matchMedia.addEventListener("change", function () {
				setTitlePosition(tabsMediaArray, matchMedia);
			});
			setTitlePosition(tabsMediaArray, matchMedia);
		});
	}
	// Установка позиций заголовков
	function setTitlePosition(tabsMediaArray, matchMedia) {
		tabsMediaArray.forEach(tabsMediaItem => {
			tabsMediaItem = tabsMediaItem.item;
			const tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
			const tabsTitleItems = tabsMediaItem.querySelectorAll('[data-tabs-title]');
			const tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
			const tabsContentItems = tabsMediaItem.querySelectorAll('[data-tabs-item]');
			tabsContentItems.forEach((tabsContentItem, index) => {
				if (matchMedia.matches) {
					tabsContent.append(tabsTitleItems[index]);
					tabsContent.append(tabsContentItem);
					tabsMediaItem.classList.add('_tab-spoller');
				} else {
					tabsTitles.append(tabsTitleItems[index]);
					tabsMediaItem.classList.remove('_tab-spoller');
				}
			});
		});
	}
	// Работа с контентом
	function initTabs(tabsBlock) {
		const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
		const tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
		const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

		if (tabsActiveHashBlock) {
			const tabsActiveTitle = tabsBlock.querySelector('[data-tabs-titles]>._tab-active');
			tabsActiveTitle.classList.remove('_tab-active');
		}
		if (tabsContent.length > 0) {
			tabsContent.forEach((tabsContentItem, index) => {
				tabsTitles[index].setAttribute('data-tabs-title', '');
				tabsContentItem.setAttribute('data-tabs-item', '');

				if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
					tabsTitles[index].classList.add('_tab-active');
				}
				tabsContentItem.hidden = !tabsTitles[index].classList.contains('_tab-active');
			});
		}
	}
	function setTabsStatus(tabsBlock) {
		const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
		const tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;

		function isTabsAnamate(tabsBlock) {
			if (tabsBlock.hasAttribute('data-tabs-animate')) {
				return tabsBlock.dataset.tabsAnimate > 0 ? tabsBlock.dataset.tabsAnimate : 500;
			}
		}
		const tabsBlockAnimate = isTabsAnamate(tabsBlock);

		if (tabsContent.length > 0) {
			tabsContent.forEach((tabsContentItem, index) => {
				if (tabsTitles[index].classList.contains('_tab-active')) {
					if (tabsBlockAnimate) {
						_slideDown(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = false;
					}
					location.hash = `tab-${tabsBlockIndex}-${index}`;
				} else {
					if (tabsBlockAnimate) {
						_slideUp(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = true;
					}
				}
			});
		}
	}
	function setTabsAction(e) {
		const el = e.target;
		if (el.closest('[data-tabs-title]')) {
			const tabTitle = el.closest('[data-tabs-title]');
			const tabsBlock = tabTitle.closest('[data-tabs]');
			if (!tabTitle.classList.contains('_tab-active') && !tabsBlock.querySelectorAll('._slide').length) {

				const tabActiveTitle = tabsBlock.querySelector('[data-tabs-title]._tab-active');
				if (tabActiveTitle) {
					tabActiveTitle.classList.remove('_tab-active');
				}

				tabTitle.classList.add('_tab-active');
				setTabsStatus(tabsBlock);
			}
			e.preventDefault();
		}
	}


	//Select =================
	let selects = document.getElementsByTagName('select');
	if (selects.length > 0) {
		selects_init();
	}
	function selects_init() {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_init(select);
		}
		//select_callback();
		document.addEventListener('click', function (e) {
			selects_close(e);
		});
		document.addEventListener('keydown', function (e) {
			if (e.code === 'Escape') {
				selects_close(e);
			}
		});
	}
	function selects_close(e) {
		const selects = document.querySelectorAll('.select');
		if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_body_options = select.querySelector('.select__options');
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
	}
	function select_init(select) {
		const select_parent = select.parentElement;
		const select_modifikator = select.getAttribute('class');
		const select_selected_option = select.querySelector('option:checked');
		select.setAttribute('data-default', select_selected_option.value);
		select.style.display = 'none';
	
		select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');
	
		let new_select = select.parentElement.querySelector('.select');
		new_select.appendChild(select);
		select_item(select);
	}
	function select_item(select) {
		const select_parent = select.parentElement;
		const select_items = select_parent.querySelector('.select__item');
		const select_options = select.querySelectorAll('option');
		const select_selected_option = select.querySelector('option:checked');
		const select_selected_text = select_selected_option.text;
		const select_type = select.getAttribute('data-type');
	
		if (select_items) {
			select_items.remove();
		}
	
		let select_type_content = '';
		if (select_type == 'input') {
			select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Поле является обязательным" data-value="' + select_selected_text + '" class="select__input"></div>';
		} else {
			select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
		}
	
		select_parent.insertAdjacentHTML('beforeend',
			'<div class="select__item">' +
			'<div class="select__title">' + select_type_content + '</div>' +
			'<div hidden class="select__options">' + select_get_options(select_options) + '</div>' +
			'</div></div>');
	
		select_actions(select, select_parent);
	}
	function select_actions(original, select) {
		const select_item = select.querySelector('.select__item');
		const selectTitle = select.querySelector('.select__title');
		const select_body_options = select.querySelector('.select__options');
		const select_options = select.querySelectorAll('.select__option');
		const select_type = original.getAttribute('data-type');
		const select_input = select.querySelector('.select__input');
	
		selectTitle.addEventListener('click', function (e) {
			selectItemActions();
		});
	
		function selectMultiItems() {
			let selectedOptions = select.querySelectorAll('.select__option');
			let originalOptions = original.querySelectorAll('option');
			let selectedOptionsText = [];
			for (let index = 0; index < selectedOptions.length; index++) {
				const selectedOption = selectedOptions[index];
				originalOptions[index].removeAttribute('selected');
				if (selectedOption.classList.contains('_selected')) {
					const selectOptionText = selectedOption.innerHTML;
					selectedOptionsText.push(selectOptionText);
					originalOptions[index].setAttribute('selected', 'selected');
				}
			}
			select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
		}
		function selectItemActions(type) {
			if (!type) {
				let selects = document.querySelectorAll('.select');
				for (let index = 0; index < selects.length; index++) {
					const select = selects[index];
					const select_body_options = select.querySelector('.select__options');
					if (select != select_item.closest('.select')) {
						select.classList.remove('_active');
						_slideUp(select_body_options, 100);
					}
				}
				_slideToggle(select_body_options, 100);
				select.classList.toggle('_active');
			}
		}
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.getAttribute('data-value');
			const select_option_text = select_option.innerHTML;
	
			if (select_type == 'input') {
				select_input.addEventListener('keyup', select_search);
			} else {
				if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
					select_option.style.display = 'none';
				}
			}
			select_option.addEventListener('click', function () {
				for (let index = 0; index < select_options.length; index++) {
					const el = select_options[index];
					el.style.display = 'block';
				}
				if (select_type == 'input') {
					select_input.value = select_option_text;
					original.value = select_option_value;
				} else {
					if (original.hasAttribute('multiple')) {
						select_option.classList.toggle('_selected');
						selectMultiItems();
					} else {
						select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
						original.value = select_option_value;
						select_option.style.display = 'none';
					}
				}
				let type;
				if (original.hasAttribute('multiple')) {
					type = 'multiple';
				}
				selectItemActions(type);
			});
		}
	}
	function select_get_options(select_options) {
		if (select_options) {
			let select_options_content = '';
			for (let index = 0; index < select_options.length; index++) {
				const select_option = select_options[index];
				const select_option_value = select_option.value;
				if (select_option_value != '') {
					const select_option_text = select_option.innerHTML;
					select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
				}
			}
			return select_options_content;
		}
	}
	function select_search(e) {
		let select_block = e.target.closest('.select ').querySelector('.select__options');
		let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
		let select_search_text = e.target.value.toUpperCase();
	
		for (let i = 0; i < select_options.length; i++) {
			let select_option = select_options[i];
			let select_txt_value = select_option.textContent || select_option.innerText;
			if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
				select_option.style.display = "";
			} else {
				select_option.style.display = "none";
			}
		}
	}
	function selects_update_all() {
		let selects = document.querySelectorAll('select');
		if (selects) {
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				select_item(select);
			}
		}
	}
	


//SlideToggle
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}




//Popups
//BodyLock
let unlock = true;

function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}


let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});