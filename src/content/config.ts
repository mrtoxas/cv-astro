import { z, defineCollection } from "astro:content";

const stringTrim = z.string().trim();

const mainCollection = defineCollection({
  type: "data",
  schema: z.object({

    hero: z.object({
      fullname: stringTrim,
      position: stringTrim,
    }),

    about: z.object({
      title: stringTrim,
      summary: stringTrim,
    }),

    contacts: z.object({
      ariaLabel: stringTrim,
      links: z.array(
        z.object({
          href: stringTrim,
          text: stringTrim,
          title: stringTrim,
          icon: stringTrim
        })
      )
    }),

    skills: z.object({
      title: stringTrim,
      list: z.array(
        z.object({
          title: stringTrim,
          list: z.array(stringTrim)
        })
      )
    }),

    education: z.object({
      title: stringTrim,
      list: z.array(
        z.object({
          name: stringTrim,
          years: stringTrim,
          degree: stringTrim,
          additionals: z.array(stringTrim)
        })
      )
    }),

    works: z.object({
      title: stringTrim,
      list: z.array(
        z.object({
          name: stringTrim,
          position: stringTrim,
          years: stringTrim,
          additionals: z.array(stringTrim),
          skills: z.object({
            title: z.string(),
            list: z.array(stringTrim)
          })
        })
      )
    }),

    additional: z.object({
      title: stringTrim,
      text: stringTrim,
      link: z.object({
        name: stringTrim,
        tip: stringTrim,
        href: stringTrim,
      }).optional(),
    }),

    footer: z.object({
      developer: z.object({
        name: stringTrim,
      }),
      license: z.object({
        name: stringTrim,
        link: stringTrim,
        author: stringTrim,
      }),
      link: z.object({
        name: stringTrim,
        href: stringTrim
      })
    })
  })
});

export const collections = {
  main: mainCollection,
};


