import { notFound } from 'next/navigation';
import { siteConfig, type Language } from '@/site.config';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AboutPageProps {
  params: {
    lang: Language;
  };
}

export async function generateStaticParams() {
  return siteConfig.languages.map((lang) => ({
    lang,
  }));
}

export default function AboutPage({ params }: AboutPageProps) {
  if (!siteConfig.languages.includes(params.lang)) {
    notFound();
  }

  const content = params.lang === 'uk' ? {
    title: 'Про мене',
    subtitle: 'Засновник YARUS Corporation',
    intro: 'Вітаю! Я Ярослав Усенко, засновник YARUS Corporation та ентузіаст технологій, психології та управління.',
    sections: {
      background: {
        title: 'Мій шлях',
        content: 'З багаторічним досвідом у сфері технологій та управління, я присвячую свій час розвитку інноваційних проектів та дослідженню людської поведінки в контексті бізнесу та технологій.'
      },
      interests: {
        title: 'Сфери інтересів',
        items: [
          'Психологія та поведінкові науки',
          'Програмування та розробка ПЗ',
          'Вбудовані системи та IoT',
          'Управління та лідерство',
          'Філософія технологій',
          'Аналіз та інсайти'
        ]
      },
      mission: {
        title: 'Місія',
        content: 'Створення простору для обміну ідеями, досвідом та знаннями, які можуть надихнути та допомогти іншим у їхньому професійному та особистому розвитку.'
      }
    }
  } : {
    title: 'About Me',
    subtitle: 'Founder of YARUS Corporation',
    intro: 'Hello! I\'m Yaroslav Usenko, founder of YARUS Corporation and enthusiast of technology, psychology, and management.',
    sections: {
      background: {
        title: 'My Journey',
        content: 'With years of experience in technology and management, I dedicate my time to developing innovative projects and exploring human behavior in the context of business and technology.'
      },
      interests: {
        title: 'Areas of Interest',
        items: [
          'Psychology and Behavioral Sciences',
          'Programming and Software Development',
          'Embedded Systems and IoT',
          'Management and Leadership',
          'Philosophy of Technology',
          'Analysis and Insights'
        ]
      },
      mission: {
        title: 'Mission',
        content: 'Creating a space for sharing ideas, experiences, and knowledge that can inspire and help others in their professional and personal development.'
      }
    }
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
        <p className="text-xl text-muted-foreground mb-2">{content.subtitle}</p>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="space-y-8">
        {/* Intro */}
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed text-center">
              {content.intro}
            </p>
          </CardContent>
        </Card>

        {/* Background */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">{content.sections.background.title}</h2>
            <p className="leading-relaxed">
              {content.sections.background.content}
            </p>
          </CardContent>
        </Card>

        {/* Interests */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">{content.sections.interests.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {content.sections.interests.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mission */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">{content.sections.mission.title}</h2>
            <p className="leading-relaxed">
              {content.sections.mission.content}
            </p>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">
              {params.lang === 'uk' ? 'Технології' : 'Technologies'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {siteConfig.categories.map((category) => (
                <Badge key={category} variant="outline" className="capitalize">
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}