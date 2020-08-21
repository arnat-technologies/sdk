
  /************************************************************************
   * Bom and Dom
   *************************************************************************/
  /**
   * open new url dont not blocked by browser
   */
  function dom (href) {
    const id = '_ppo_open_proxy';
    const a = document.getElementById(id) || document.createElement('a');
    a.setAttribute('id', id);
    a.setAttribute('href', href);
    a.setAttribute('target', '_blank');
    a.style.display = 'none';

    if (!a.parentNode) document.body.appendChild(a);
    this.trigger(a, 'click', 'MouseEvents');
  };

  /**
   * trigger event
   * https://stackoverflow.com/questions/2490825/how-to-trigger-event-in-javascript
   */
    const trigger = function (element, event, eventType) {
    if (document.createEventObject) {
      var e = document.createEventObject();
      return element.fireEvent('on' + event, e);
    } else {
      var e = document.createEvent(eventType || 'HTMLEvents');
      e.initEvent(event, true, true);
      element.dispatchEvent(e);
    }
  };

  /**
   * setInterval func fix times
   * https://stackoverflow.com/questions/2956966/javascript-telling-setinterval-to-only-fire-x-amount-of-times
   */
  const setTimesout = function () {
    const func = arguments[0];
    const delay = arguments[1] === undefined ? 0 : parseFloat(arguments[1]);
    const times = arguments[2] === undefined ? 1 : parseInt(arguments[2]);
    const args = arguments.length > 3 ? const args(arguments, 3) : null;
    const target = { index: 0, times: times, over: false };

    var id = setInterval(function () {
      target.index++;
      if (target.index > times) {
        clearInterval(id);
      } else {
        if (target.index == times) target.over = true;
        func.apply(target, args);
      }
    }, delay);

    return id;
  };

  const clearTimesout = function (id) {
    clearInterval(id);
  };

  /**
   * construct
   * https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
   */
  const construct = function () {
    const classs = arguments[0];
    return new (Function.prototype.bind.apply(classs, arguments))();
  };

  /**
   * Gets all the formal parameter names of a function
   * https://www.zhihu.com/question/28912825
   */
  const paramsName = function (fn) {
    return /\(\s*([\s\S]*?)\s*\)/.exec(fn.toString())[1].split(/\s*,\s*/);
  };
