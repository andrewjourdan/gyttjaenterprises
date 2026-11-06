const $ = id => document.getElementById(id);
  const money = n => '$' + Math.round(n).toLocaleString();
  const ids = ['acres','depth','cost','credit','rev','yield','fert','cut'];

  function calc(){
    const acres=+$('acres').value, depth=+$('depth').value, cost=+$('cost').value,
          credit=+$('credit').value, rev=+$('rev').value, yld=+$('yield').value,
          fert=+$('fert').value, cut=+$('cut').value;

    $('acresO').textContent = acres.toLocaleString() + ' ac';
    $('depthO').textContent = depth + ' in';
    $('costO').textContent = '$' + cost + ' / yd³';
    $('creditO').textContent = '$' + credit + ' / yd³';
    $('revO').textContent = money(rev) + ' / ac';
    $('yieldO').textContent = yld + '%';
    $('fertO').textContent = money(fert) + ' / ac';
    $('cutO').textContent = cut + '%';

    const ydPerAcre = depth/12 * 43560 / 27;
    const netPerYd = Math.max(cost - credit, 0);
    const perAcre = ydPerAcre * netPerYd;
    const annual = rev*yld/100 + fert*cut/100;
    const payback = annual > 0 ? perAcre/annual : Infinity;

    $('vol').textContent = Math.round(ydPerAcre).toLocaleString() + ' yd³/ac';
    $('perAcre').textContent = money(perAcre);
    $('total').textContent = money(perAcre*acres);
    $('annual').textContent = money(annual);
    $('payback').textContent = isFinite(payback) ? (payback < 0.1 ? 'Immediate' : payback.toFixed(1) + ' yrs') : 'No payback';

    let v;
    if(!isFinite(payback)) v = 'With no yield gain or fertilizer savings, the application never pays back. Try a higher-value crop or look for cost-share programs.';
    else if(payback <= 5) v = 'Strong case. A good candidate for a trial strip after a soil test.';
    else if(payback <= 12) v = 'Possible on the right ground. A thinner rate, a program credit or a higher-value crop shortens payback.';
    else v = 'Hard to justify for this crop at these costs. Try a thinner rate or a higher-value use like vegetables or topsoil.';
    $('verdict').textContent = v;
  }
  ids.forEach(i => $(i).addEventListener('input', calc));
  calc();

  $('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const subject = 'Gyttja quote request: ' + $('prod').value;
    const body = 'Name: ' + $('name').value +
      '\nFarm / business: ' + $('org').value +
      '\nRole: ' + $('role').value +
      '\nInterested in: ' + $('prod').value +
      '\nLocation: ' + $('loc').value +
      '\nAcres / volume: ' + $('size').value +
      '\n\n' + $('msg').value;
    window.location.href = 'mailto:inquiry@gyttjaenterprises.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });

  $('yr').textContent = new Date().getFullYear();
