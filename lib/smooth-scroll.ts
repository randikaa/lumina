import gsap from "gsap"

export const smoothScrollTo = (target: string, duration: number = 0.8) => {
  const element = document.querySelector(target)
  if (!element) return

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80
  const scrollObj = { y: window.pageYOffset }

  gsap.to(scrollObj, {
    y: targetPosition,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      window.scrollTo(0, scrollObj.y)
    },
  })
}
