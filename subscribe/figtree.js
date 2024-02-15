const g = document.getElementById.bind(document)

document.addEventListener('keydown', event => {
  if (event.key === 's') document.body.classList.toggle('deck')
})

window.addEventListener('scroll', () => {
  const start = g('portfolio').offsetTop - window.innerHeight / 2
  const y = window.scrollY - start

  const p1_offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--p1-offset'), 10)
  const p2_offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--p2-offset'), 10)

  g('portfolio-1').style.transform = `translateX(${p1_offset - y / 4}px)`
  g('portfolio-2').style.transform = `translateX(${p2_offset + y / 4}px)`
})

const jump = (action, target) => {
  g(action).addEventListener('click', e =>
    gsap.to(window, {
      duration: 1.5,
      ease: 'expo.out',
      scrollTo: target,
    }),
  )
}

jump('see-plans', '#pricing')
jump('see-work', '#portfolio')
jump('lfg', '#pricing')
