import $ from 'jquery'

const loadHTMLSuccessCallBacks = []

export function onLoadHTMLSuccess(callback){
    if(!loadHTMLSuccessCallBacks.includes(callback)){
        loadHTMLSuccessCallBacks.push(callback)
    }
}

function loadincludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e){
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include')
                
                loadHTMLSuccessCallBacks.forEach(callback => callback(data))
                loadincludes(e)
            }   
        })
    })
}
loadincludes()