import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('@/pages/home/index.vue'), meta: { titleKey: 'pages.home.title' } },
  { path: '/strategy', name: 'strategy', component: () => import('@/pages/strategy/index.vue'), meta: { titleKey: 'pages.strategy.title' } },
  { path: '/insights', name: 'insights', component: () => import('@/pages/insights/index.vue'), meta: { titleKey: 'pages.insights.title' } },
  { path: '/news', name: 'news', component: () => import('@/pages/news/index.vue'), meta: { titleKey: 'pages.news.title' } },
  { path: '/careers', name: 'careers', component: () => import('@/pages/careers/index.vue'), meta: { titleKey: 'pages.careers.title' } },
  { path: '/about', name: 'about', component: () => import('@/pages/about/index.vue'), meta: { titleKey: 'pages.about.title' } },
  { path: '/about/proposition', name: 'proposition', component: () => import('@/pages/about/proposition.vue'), meta: { titleKey: 'pages.proposition.title' } },
  { path: '/contact', name: 'contact', component: () => import('@/pages/contact/index.vue'), meta: { titleKey: 'pages.contact.title' } },
  { path: '/about/team', name: 'team', component: () => import('@/pages/about/team.vue'), meta: { titleKey: 'pages.team.title' } },
  { path: '/about/value', name: 'value', component: () => import('@/pages/about/value.vue'), meta: { titleKey: 'pages.value.title' } },
  { path: '/strategy/office', name: 'office', component: () => import('@/pages/strategy/office.vue'), meta: { titleKey: 'pages.office.title' } },
  { path: '/strategy/EAM', name: 'EAM', component: () => import('@/pages/strategy/EAM.vue'), meta: { titleKey: 'pages.EAM.title' } },
  { path: '/strategy/trust', name: 'trust', component: () => import('@/pages/strategy/trust.vue'), meta: { titleKey: 'pages.trust.title' } },
  { path: '/strategy/business', name: 'business', component: () => import('@/pages/strategy/business.vue'), meta: { titleKey: 'pages.business.title' } },
  { path: '/strategy/company', name: 'company', component: () => import('@/pages/strategy/company.vue'), meta: { titleKey: 'pages.company.title' } },
  { path: '/strategy/planning', name: 'planning', component: () => import('@/pages/strategy/planning.vue'), meta: { titleKey: 'pages.planning.title' } },
  { path: '/strategy/services', name: 'services', component: () => import('@/pages/strategy/services.vue'), meta: { titleKey: 'pages.services.title' } },
  { path: '/strategy/other', name: 'other', component: () => import('@/pages/strategy/other.vue'), meta: { titleKey: 'pages.other.title' } },
  { path: '/insights/detail', name: 'insightsDetail', component: () => import('@/pages/insights/detail.vue'), meta: { titleKey: 'pages.insightsDetail.title' } },
  { path: '/careers/detail', name: 'careersDetail', component: () => import('@/pages/careers/detail.vue'), meta: { titleKey: 'pages.careersDetail.title' } },
  { path: '/about/licenses', name: 'licenses', component: () => import('@/pages/about/licenses.vue'), meta: { titleKey: 'pages.licenses.title' } },
  { path: '/news/detail', name: 'newsDetail', component: () => import('@/pages/news/detail.vue'), meta: { titleKey: 'pages.newsDetail.title' } },
]


export default routes

