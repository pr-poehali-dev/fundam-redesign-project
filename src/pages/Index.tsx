import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const features = [
    {
      icon: 'Zap',
      title: 'Высокая производительность',
      description: 'Решения оптимизированы для максимальной скорости работы'
    },
    {
      icon: 'Shield',
      title: 'Надежная безопасность',
      description: 'Многоуровневая защита данных и инфраструктуры'
    },
    {
      icon: 'Rocket',
      title: 'Быстрое внедрение',
      description: 'Запуск проектов в сжатые сроки без потери качества'
    },
    {
      icon: 'Settings',
      title: 'Гибкая настройка',
      description: 'Адаптация под уникальные бизнес-требования'
    }
  ];

  const services = [
    {
      icon: 'Code',
      title: 'Разработка ПО',
      description: 'Создание веб и мобильных приложений',
      features: ['React/Next.js', 'Node.js/Python', 'iOS/Android']
    },
    {
      icon: 'Cloud',
      title: 'Облачные решения',
      description: 'Миграция и оптимизация инфраструктуры',
      features: ['AWS/Azure/GCP', 'Kubernetes', 'CI/CD']
    },
    {
      icon: 'Brain',
      title: 'ИИ и ML',
      description: 'Внедрение искусственного интеллекта',
      features: ['Анализ данных', 'Автоматизация', 'Предиктивная аналитика']
    },
    {
      icon: 'Lock',
      title: 'Кибербезопасность',
      description: 'Защита от современных угроз',
      features: ['Аудит безопасности', 'Мониторинг', 'Compliance']
    }
  ];

  const cases = [
    {
      title: 'Финтех платформа',
      client: 'Банковский сектор',
      result: '+300% транзакций',
      tech: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'E-commerce решение',
      client: 'Ритейл',
      result: '+150% конверсия',
      tech: ['Next.js', 'Python', 'AWS']
    },
    {
      title: 'ML аналитика',
      client: 'Телеком',
      result: '-40% затрат',
      tech: ['Python', 'TensorFlow', 'Azure']
    }
  ];

  const team = [
    {
      name: 'Алексей Иванов',
      role: 'CTO',
      image: '👨‍💻',
      experience: '15 лет в IT'
    },
    {
      name: 'Мария Петрова',
      role: 'Lead Developer',
      image: '👩‍💻',
      experience: '10 лет разработки'
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'DevOps Engineer',
      image: '👨‍🔧',
      experience: '8 лет в DevOps'
    },
    {
      name: 'Елена Кузнецова',
      role: 'Security Expert',
      image: '👩‍🔬',
      experience: '12 лет в Security'
    }
  ];

  const faqItems = [
    {
      question: 'Какие сроки реализации проектов?',
      answer: 'Сроки зависят от масштаба: от 2 недель для MVP до 6 месяцев для комплексных решений. Работаем по Agile с промежуточными релизами.'
    },
    {
      question: 'Какие технологии вы используете?',
      answer: 'Используем современный стек: React/Next.js, Node.js, Python, AWS/Azure, Kubernetes. Выбираем технологии под задачи бизнеса.'
    },
    {
      question: 'Предоставляете ли поддержку после запуска?',
      answer: 'Да, предлагаем 3 модели поддержки: базовую (24/7 мониторинг), расширенную (+ консультации) и полную (+ доработки).'
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Работаем по этапам: 30% аванс, 40% по промежуточным результатам, 30% после завершения. Возможна почасовая оплата для небольших задач.'
    },
    {
      question: 'Можно ли увидеть портфолио?',
      answer: 'Конечно! Предоставим кейсы из вашей отрасли с метриками результатов. Некоторые проекты под NDA - покажем общую информацию.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            TechSolutions
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Преимущества</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="text-foreground/80 hover:text-primary transition-colors">Кейсы</a>
            <a href="#team" className="text-foreground/80 hover:text-primary transition-colors">Команда</a>
            <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">FAQ</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-in">
            Технологии будущего уже здесь
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Разработка и внедрение<br />технологических решений
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Превращаем амбициозные идеи в работающие продукты с помощью передовых технологий и экспертизы
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="animate-fade-in">
              <div className="text-4xl font-heading font-bold text-primary">150+</div>
              <div className="text-muted-foreground">Проектов</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-heading font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Клиентов</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-heading font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Удовлетворенность</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-heading font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход и проверенная экспертиза для достижения ваших целей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-transparent hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр технологических решений для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-8 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  activeService === index ? 'ring-2 ring-primary shadow-xl scale-105' : ''
                }`}
                onClick={() => setActiveService(activeService === index ? null : index)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Успешные кейсы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты для наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-heading font-semibold mb-2">{caseItem.title}</h3>
                <div className="text-sm text-muted-foreground mb-3">{caseItem.client}</div>
                <div className="text-3xl font-bold text-primary mb-4">{caseItem.result}</div>
                <div className="flex flex-wrap gap-2">
                  {caseItem.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксперты с многолетним опытом в индустрии
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-heading font-semibold mb-1">{member.name}</h3>
                <div className="text-primary font-medium mb-2">{member.role}</div>
                <div className="text-sm text-muted-foreground">{member.experience}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашей задачи. Первая консультация бесплатно!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={20} className="text-primary" />
                <span>info@techsolutions.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={20} className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
              <Icon name="Send" size={20} className="mr-2" />
              Оставить заявку
            </Button>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-card/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TechSolutions
              </div>
              <p className="text-muted-foreground text-sm">
                Технологические решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Разработка ПО</li>
                <li>Облачные решения</li>
                <li>ИИ и ML</li>
                <li>Кибербезопасность</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@techsolutions.com</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 TechSolutions. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
