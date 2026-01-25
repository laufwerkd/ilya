import AppFooter from './AppFooter.vue'
import AppGalery from './AppGalery.vue'
import AppHeader from './AppHeader.vue'
import AppLogo from './AppLogo.vue'
import AppMenu from './AppMenu.vue'
import AppThemeSwitcher from './AppThemeSwitcher.vue'
import BaseButton from './BaseButton.vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
import BaseSelect from './BaseSelect.vue'
import BaseTooltip from './BaseTooltip.vue'

export const registerComponents = (app) => {
  app.component('AppFooter', AppFooter)
  app.component('AppGalery', AppGalery)
  app.component('AppHeader', AppHeader)
  app.component('AppLogo', AppLogo)
  app.component('AppMenu', AppMenu)
  app.component('AppThemeSwitcher', AppThemeSwitcher)
  app.component('BaseButton', BaseButton)
  app.component('BaseCard', BaseCard)
  app.component('BaseSection', BaseSection)
  app.component('BaseSelect', BaseSelect)
  app.component('BaseTooltip', BaseTooltip)
}
