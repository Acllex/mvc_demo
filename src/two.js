import "./two.css";
import $ from 'jquery';

$('#two').on('click', 'li>div', e => {
    $(e.target).addClass('select').siblings().removeClass('select');
    const index = $(e.target).index();
    $(e.target).parent().next().children().removeClass('show');
    $(e.target).parent().next().children().eq(index).addClass('show');
})
