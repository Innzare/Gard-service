<template>
  <div class="types-page">
    <div class="static mb-10">
      <p>
        Все обработки проводятся совместно с ГНУ Башкирским НИИ сельского
        хозяйства, Башкирской научно-производственной ветеринарной лабораторией
        ГУ, Управлением Федеральной службы по ветеринарному и фитосанитарному
        надзору.
      </p>

      <p>
        Эффективность и безопасность обработок с использованием технологий
        <span style="color: #0063a7; font-weight: bold">ГАРД®</span>
        подтверждена научно-исследовательским испытаниями, проведенными в рамках
        работ на тему: «Научно-методическое обоснование применения генератора
        аэрозоли
        <span style="color: #0063a7; font-weight: bold">ГАРД®</span> для целей
        медицинской дезинфекции и дезинсекции» учеными ФБНУ
        «НАУЧНО-ИССЛЕДОВАТЕЛЬСКОГО ИНСТИТУТА ДЕЗИНФЕКТОЛОГИИ» Роспотребнадзора
        г. Москва.
      </p>
    </div>
    <v-tabs-items v-model="currentTypesTab" class="tabs">
      <v-tab-item disabled>
        <v-card flat>
          <v-card-text>
            <div class="section-title">Растениеводство</div>
            <p>
              В борьбе с хозяйственно опасными вредителями, болезнями растений,
              при гербицидных обработках, десикации и внекорневой подкормке,
              мобильная установка
              <span style="color: #0063a7; font-weight: bold">ГАРД®</span> не
              имеет равных по эффективности, производительности и минимальному
              воздействию на окружающую среду. Универсальность генератора
              <span style="color: #0063a7; font-weight: bold">ГАРД®</span>
              позволяет использовать его практически во всех технологиях
              внесения химических и биологических препаратов в сельском
              хозяйстве.
            </p>
            <div class="video">
              <iframe
                width="760"
                height="430"
                src="https://www.youtube-nocookie.com/embed/iqbjYaiTTmk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <p>
              Самое востребованное направление в использовании аэрозольной
              технологии
              <span style="color: #0063a7; font-weight: bold">ГАРД®</span> -
              борьба с нашествием опасных насекомых, таких как саранча и луговой
              мотылек, при которой важно в кратчайшие сроки охватить огромные
              территории. Установки
              <span style="color: #0063a7; font-weight: bold">ГАРД®</span>
              успешно применяются в борьбе с саранчой в Республике Башкортостан,
              Оренбургской области и в Республике Казахстан. Эффективность
              обработок достигает 98%, что подтверждается Башкирским
              научно-исследовательским институтом сельского хозяйства.
              Максимальная сменная производительность
              <span style="color: #0063a7; font-weight: bold">ГАРД®</span> - до
              2000 га. Это в 5 раз выше, чем у авиационных и в 10 раз выше, чем
              у штанговых наземных опрыскивателей. При этом значительно
              сокращаются трудозатраты на подвоз воды и заправку рабочей
              жидкостью. Установка
              <span style="color: #0063a7; font-weight: bold">ГАРД®</span>
              работает в вечернее и ночное время, когда воздействие на
              большинство полезных для человека насекомых минимально.
            </p>

            <p class="mb-13">
              Такие технологические характеристики установки
              <span style="color: #0063a7; font-weight: bold">ГАРД®</span>, как
              большая ширина захвата, высокая производительность, низкий расход
              рабочей жидкости существенно облегчают и ускоряют проведение
              защитных мероприятий, а так же значительно сокращают затраты, в
              том числе и из-за соответствия агротехнических сроков.
            </p>
            <div class="section-title">
              Технологические характеристики установки ГАРД® :
            </div>
            <v-data-table
              :headers="rastHeaders"
              :items="rastDesc"
              disable-sort
              hide-default-footer
              mobile-breakpoint="768"
            ></v-data-table>
            <div class="section-title mt-10">Дополнительные видеоматериалы</div>
            <div class="dop-video-wrapper">
              <div class="video">
                <iframe
                  width="560"
                  height="330"
                  src="https://www.youtube-nocookie.com/embed/iqbjYaiTTmk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="video">
                <iframe
                  width="560"
                  height="330"
                  src="https://www.youtube-nocookie.com/embed/iqbjYaiTTmk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item disabled>
        <v-card flat>
          <v-card-text>
            <div class="section-title">Животноводство и птицеводство</div>
            <p class="font-weight-bold">
              Основные мероприятия проводимые при данном виде обработок:
            </p>
            <div class="event-type">
              <div class="event-type__wrapper">
                <div class="event-type__text">
                  <p>
                    Дезинфекция помещений - уничтожение вредных микроорганизмов.
                    Мероприятия по дезинфекции помещений направлены на
                    уничтожение возбудителей инфекционных заболеваний.
                    Дезинфекционная обработка проводится как для профилактики,
                    так и с целью уничтожения микроорганизмов или токсичных и
                    аллергенных продуктов их жизнедеятельности.
                  </p>

                  <p>
                    Актуальность медицинской дезинфекции обусловлена важностью
                    осуществления неспецифической профилактики инфекционных
                    болезней , в т.ч. новых и вновь возвращающихся инфекций.
                    Кроме того, возрастает роль и значение проведения масштабных
                    дезинфекционных мероприятий при ликвидации эпидемических
                    очагов эпизоотий в животноводстве и птицеводстве. Применение
                    высокопроизводительной установки
                    <span style="color: #0063a7; font-weight: bold">ГАРД®</span>
                    для осуществления медицинской дезинфекции является важнейшим
                    звеном успеха в практической деятельности дезинфекционной
                    службы.
                  </p>
                </div>

                <div class="event-type__item">
                  <img src="@/assets/img/icons/2.svg" alt="" />
                  Дезинфекция
                </div>
              </div>

              <div class="event-type__wrapper">
                <div class="event-type__text">
                  <p>
                    Дезинсекция – это комплекс мероприятий, направленных на
                    уничтожение вредоносных насекомых и клещей (чесоточных,
                    пастбищных и куриных клещей, оводов, комаров, мошек, мух,
                    клопов, пухопероедов, блох, вшей).
                  </p>

                  <p>
                    В животноводческих помещениях и на пастбищах, где содержатся
                    и пасутся животные, параллельно живут и развиваются
                    насекомые и клещи. Они, нападая на животных и птиц,
                    переносят болезнетворных микробов-возбудителей многих
                    заразных болезней (энцефаломиелита и инфекционной анемии
                    лошадей, пироплазмозов, кокцидиоза кроликов и птиц,
                    сибирской язвы, туберкулеза, бруцеллеза и других). Клещи,
                    вши и блохи, паразитирующие на теле животных, сильно
                    беспокоят их, снижается продуктивность животных, постепенно
                    приводит к исхуданию и нередко даже к гибели.
                  </p>

                  <p>
                    Применение высокотехнологичного оборудования
                    <span style="color: #0063a7; font-weight: bold">ГАРД®</span>
                    для осуществления медицинской дезинсекции в животноводческих
                    и птицеводческих помещениях, а так же природных биотопах
                    является важнейшим звеном успеха в практической деятельности
                    дезинфекционной службы. Установка
                    <span style="color: #0063a7; font-weight: bold">ГАРД®</span>
                    отвечает всем требованиям к аппаратуре данного назначения:
                    высокая производительность (до 100000 куб.м в смену),
                    качество и эффективность обработок, безопасность для
                    здоровья человека и животных.
                  </p>
                </div>
                <div class="event-type__item">
                  <img src="@/assets/img/icons/3.svg" alt="" />
                  Дезинсекция
                </div>
              </div>

              <div class="event-type__wrapper">
                <div class="event-type__text">
                  <p>
                    Вакцинация — это мера, направленная на предупреждение
                    инфекционных болезней. Аэрозольный путь введения вакцин
                    ускоряет проникновение препарата в организм животного и
                    улучшает иммунитет за счет создания иммунологического
                    барьера на его слизистых оболочках. По эффективности
                    аэрозольная иммунизация не уступает другим способам введения
                    антигена, а в некоторых случаях даже превосходит их.
                    Несвоевременная вакцинация от вирусных болезней приводит к
                    ослаблению иммунитета и может способствовать тому, что
                    животное заболеет.
                  </p>
                </div>
                <div class="event-type__item">
                  <img src="@/assets/img/icons/4.svg" alt="" />
                  Вакцинация
                </div>
              </div>

              <div class="event-type__wrapper">
                <div class="event-type__text">
                  <p>
                    ЭМ ТЕХНОЛОГИЯ (ЭМТ) - это совокупность методов применения
                    препаратов серии ЭМ (эффективных микроорганизмов) в
                    технологиях производства сельскохозяйственной продукции.
                    Одними из них являются препараты серии Восток-ЭМ1 и
                    Байкал-ЭМ 1 представляющие собой, концентрированный водный
                    раствор, содержащий комплекс эффективных (жизнетворных
                    специально отобранных (около 90) штаммов микроорганизмов-
                    фотосинтезирующих, молочнокислых и азотофиксирующих
                    бактерий, дрожжей и продуктов их жизнедеятельности.
                  </p>

                  <p>
                    Использование препаратов Восток-ЭМ1 и Байкал-ЭМ1 для
                    обработки оборудования, стен и пола, аэрозольного
                    обеззараживания воздушной среды помещений, устраняет
                    неприятные запахи, уничтожает патогенную микрофлору и
                    паразитирующих насекомых, оздоравливает микроклимат. ЭМ
                    питаясь отходами животных, перерабатывают их в эффективные
                    органические удобрения. Происходит заселение помещений и
                    кожного покрова животных эффективным микроорганизмами, уже
                    после второй обработки исчезают запахи. Снижается микробная
                    загрязненность воздушной среды и оборудования на 50%.
                  </p>

                  <p>
                    Аэрозольный генератор
                    <span style="color: #0063a7; font-weight: bold">ГАРД®</span>
                    обеспечивает экспресс-обеззараживание животноводческих,
                    складских помещений, элеваторов, обрабатывает поля и лесные
                    насаждения против вредителей, проводит вегетационную
                    подкормку сельскохозяйственных культур, освобождает от
                    многих энергоёмких работ сельхозпроизводителя, многократно
                    повышает рентабельность производства.
                  </p>
                </div>
                <div class="event-type__item">
                  <img src="@/assets/img/icons/1.svg" alt="" />
                  Экологическое восстановление окружающей среды
                </div>
              </div>
            </div>
            <div class="section-title mt-10">
              Технологические характеристики установки ГАРД® :
            </div>
            <v-data-table
              :headers="jivHeaders"
              :items="jivDesc"
              disable-sort
              hide-default-footer
              mobile-breakpoint="768"
            ></v-data-table>
            <div class="section-title mt-10">Дополнительные видеоматериалы</div>
            <div class="video">
              <iframe
                width="760"
                height="430"
                src="https://www.youtube-nocookie.com/embed/iqbjYaiTTmk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item disabled>
        <v-card flat>
          <v-card-text>
            <div class="section-title">Лесное хозяйство</div>
            <div class="video">
              <iframe
                width="760"
                height="430"
                src="https://www.youtube-nocookie.com/embed/iqbjYaiTTmk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p>
              Лесозащита является одним из важнейших элементов лесоводства.
              Значение мероприятий по локализации и ликвидации очагов вредных
              организмов трудно переоценить. Особенно остро встает вопрос о
              надежной защите лесных насаждений в лесостепной зоне от
              повреждений вредными насекомыми, которые наносят лесу серьезный
              ущерб, от его ослабления до полной потери жизнеспособности и
              усыхания.
            </p>
            <p>
              Наиболее рациональной остается система защитных мероприятий,
              организованная по принципу интегрированной борьбы. При этом в
              целях наименьшего воздействия на окружающую среду учитываются
              многие факторы, связанные, как с биологией хозяйственно опасного
              организма, так и с технологией применения пестицидов.
            </p>
            <p>
              Аэрозольная технология применения инсектицидов, наряду с высокой
              производительностью (до 2000 га за смену), характеризуется меньшим
              загрязнением окружающей среды и более качественным проведением
              работ, по сравнению с авиационным методом опрыскивания. При
              аэрозольных обработках максимально сохраняется полезная
              энтомофауна, в том числе пчелы, что подтверждается проведенными
              исследованиями в научно-исследовательских организациях
              Башкортостана, ИХКИГ СО РАН (г. Новосибирск) и сотрудниками
              ВНИИГИНТОКС (Н.В. Булевский). Это позволяет в короткие сроки и с
              меньшим воздействием на нецелевые объекты производить лесозащитные
              работы по локализации и ликвидации очагов вредных организмов.
            </p>

            <p>
              Компания
              <span style="color: #0063a7; font-weight: bold"
                >«ГАРД® Сервис»</span
              >
              занимается внедрением усовершенствованных наземных машин
              <span style="color: #0063a7; font-weight: bold">ГАРД®</span>
              для внесения пестицидов в различных отраслях, в том числе и в
              лесном хозяйстве. Наши машины успешно применялись в лесах
              Тюменской, Нижегородской, Тверской, Ростовской, Московской
              областей, в Республике Башкортостан, а так же в Республике
              Казахстан. Специалисты, работающие в нашей организации, имеют
              огромный опыт применения наземных машин
              <span style="color: #0063a7; font-weight: bold">ГАРД®</span>
              против хвое-листогрызущих вредителей.
            </p>

            <p>
              Такие технологические характеристики установки
              <span style="color: #0063a7; font-weight: bold">ГАРД®</span>, как
              большая ширина захвата, высокая производительность, низкий расход
              рабочей жидкости существенно облегчают и ускоряют проведение
              лесозащитных работ, а так же значительно сокращают затраты.
            </p>

            <div class="section-title mt-10">
              Технологические характеристики установки ГАРД® при лесозащитных
              работах:
            </div>

            <v-data-table
              :headers="lesHeaders"
              :items="lesDesc"
              disable-sort
              hide-default-footer
              mobile-breakpoint="768"
            ></v-data-table>

            <div class="section-title mt-10">Дополнительные видеоматериалы</div>
            <div class="dop-video-wrapper">
              <div class="video">
                <iframe
                  width="760"
                  height="430"
                  src="https://www.youtube-nocookie.com/embed/iqbjYaiTTmk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="video">
                <iframe
                  width="760"
                  height="430"
                  src="https://www.youtube-nocookie.com/embed/iqbjYaiTTmk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item disabled>
        <v-card flat>
          <v-card-text>
            <div class="section-title">Здравоохранение</div>
            <div class="dop-video-wrapper">
              <div class="video">
                <iframe
                  width="760"
                  height="430"
                  src="https://www.youtube-nocookie.com/embed/iqbjYaiTTmk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="video">
                <iframe
                  width="760"
                  height="430"
                  src="https://www.youtube-nocookie.com/embed/iqbjYaiTTmk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="icon-with-text-wrapper">
              <div class="icon-with-text">
                <img src="@/assets/img/icons/mosquito.svg" alt="" />
                <p class="icon-with-text__title">
                  Обработка от кровососущих насекомых
                </p>
                <p>
                  Генераторы аэрозольные
                  <span style="color: #0063a7; font-weight: bold">ГАРД®</span>
                  способны проводить обработку территорий загородных домов,
                  коттеджей, садов, приусадебных лесов, водоемов от всех
                  кровососущих вредителей (комаров, клещей, мошкары), а также
                  ос. Обработки проводятся без причинения вреда людям, нецелевым
                  животным (лесным зверям, домашним собакам, котам,
                  земноводным), промысловым и декоративным рыбам, обитающим в
                  приусадебных или близлежащих водоемах.
                </p>
              </div>
              <div class="icon-with-text">
                <img src="@/assets/img/icons/vaccine.svg" alt="" />
                <p class="icon-with-text__title">Вакцинация</p>
                <p>
                  Методы вакцинации, не нарушающие естественные барьеры
                  человека, лишены многих недостатков подкожного и
                  внутримышечного способов введения вакцин. Проблема вакцинации
                  аэрозольным методом стала интенсивно разрабатываться после
                  публикации работA.M. Безредки (1925). Он выдвинул "теорию
                  местного иммунитета" и считал, что вакцины необходимо вводить
                  тем же путем, каким возбудители инфекционных заболеваний
                  проникают в организм.
                </p>

                <p>
                  Аэрозольная вакцинация позволяет достичь повышенной
                  устойчивости легких через короткий промежуток времени, что
                  имеет немаловажное значение для профилактики респираторных
                  инфекций. Аэрозольная вакцина попадает не только в легкие, но
                  и частично в желудочно-кишечный тракт, это усиливает
                  напряженность развивающегося иммунитета.
                </p>

                <p>
                  По эффективности аэрозольная иммунизация не уступает другим
                  способам введения антигена, а в некоторых случаях даже
                  превосходит их. Примечательно, что уровень сенсибилизации
                  организма, достигаемый аэрозольной вакцинацией, не превышает
                  степень повышенной чувствительности при других способах
                  иммунизации. Поствакцинальные реакции развиваются вскоре после
                  ингаляции или через 3-6 суток и носят преимущественно общий
                  характер (повышение температуры, головная боль, общая
                  слабость, боли в мышцах и суставах, тошнота, потеря аппетита).
                </p>

                <p>
                  При аэрозольной иммунизации можно получить иммунный ответ на
                  любую вакцину (живую, убитую, химическую, жидкую, сухую).
                  Более удобными являются вакцины сухие, концентрированные с
                  определенным фракционно-дисперсным составом. Для некоторых
                  вакцин необходим наполнитель, который способствует
                  диспергированию вакцин при их распылении.
                </p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item disabled>
        <v-card flat>
          <v-card-text>
            <div class="section-title">МЧС</div>
            <p>
              Карантинные обработки – обработки территорий при обнаружении на
              них карантинного вредного организма.
            </p>
            <p>
              Карантинный вредный организм (в карантине растений) – согласно
              законодательству РФ, это вредный организм, отсутствующий или
              ограниченно распространенный на территории Российской Федерации;
              при этом под вредным организмом понимается растение любого вида,
              сорта или биологического типа, животное или болезнетворный
              организм любого вида, расы, биологического типа, способные нанести
              вред растениям или продукции растительного происхождения.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Types",
  data() {
    return {
      rastHeaders: [
        {
          text: "Производительность одной установки",
          value: "name",
        },
        { text: "Эффективная ширина захвата", value: "calories" },
        { text: "Расход рабочей жидкости", value: "fat" },
        { text: "Расход топлива установки (с автомобилем)", value: "carbs" },
      ],
      rastDesc: [
        {
          name: "2000 га за смену",
          calories: "До 700 м",
          fat: "1-2 л/га",
          carbs: "Не более 0,35 л/га",
        },
      ],
      jivHeaders: [
        {
          text: "Производительность одной установки",
          value: "name",
        },
        { text: "Расход рабочей жидкости", value: "fat" },
      ],
      jivDesc: [
        {
          name: "до 1000 м3 в минуту",
          fat: "3 – 80 л/мин",
        },
      ],
      lesHeaders: [
        {
          text: "Производительность одной установки",
          value: "name",
        },
        { text: "Эффективная ширина захвата", value: "fat" },
        { text: "Расход рабочей жидкости", value: "carbs" },
        { text: "Расход топлива установки (с автомобилем)", value: "calories" },
      ],
      lesDesc: [
        {
          name: "2000 га за смену",
          fat: "До 1500 м",
          carbs: "0,25-3 л/га",
          calories: "Не более 0,35 л/га",
        },
      ],
    };
  },
  components: {},
  props: {
    currentTypesTab: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters(["typesCurrentTab", "typesTabs"]),
  },
  watch: {
    currentTypesTab() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
@mixin laptop {
  @media screen and (max-width: 1024px) {
    @content;
  }
}
@mixin tablets {
  @media screen and (max-width: 768px) {
    @content;
  }
}
@mixin phones {
  @media screen and (max-width: 425px) {
    @content;
  }
}

$maxWidth: 1920;
$maxWidthContainer: 1170;

@mixin adaptiv-value($property, $startSize, $minSize, $type) {
  $addSize: $startSize - $minSize;
  @if $type==1 {
    // Только если меньше контейнера
    #{$property}: $startSize + px;
    @media (max-width: #{$maxWidthContainer + px} ) {
      #{$property}: calc(
        #{$minSize + px} + #{$addSize} *
          ((100vw - 320px) / #{$maxWidthContainer - 320})
      );
    }
  } @else if $type==2 {
    // Только если больше контейнера
    #{$property}: $startSize + px;
    @media (min-width: #{$maxWidthContainer + px}) {
      #{$property}: calc(
        #{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320})
      );
    }
  } @else {
    // Всегда
    #{$property}: calc(
      #{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320})
    );
  }
}

.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  padding: 20px !important;
  color: #000 !important;
  font-size: 18px;
  text-align: center !important;
}
.v-data-table__mobile-row {
  padding: 5px !important;
}
.v-data-table__mobile-row__header,
.v-data-table__mobile-row__cell {
  font-size: 14px !important;
  min-height: 20px;
}
.v-data-table--mobile > .v-data-table__wrapper tbody {
  padding: 20px 0;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
  text-align: center !important;
  font-size: 16px !important;
  padding: 20px !important;
  @include tablets() {
    text-align: left !important;
    padding: 10px !important;
  }
}

.v-card__subtitle,
.v-card__text,
.v-card__title {
  @include tablets() {
    padding: 0px !important;
  }
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  @include tablets() {
    display: none !important;
  }
}
</style>

<style lang="scss" scoped>
@mixin laptop {
  @media screen and (max-width: 1024px) {
    @content;
  }
}
@mixin tablets {
  @media screen and (max-width: 768px) {
    @content;
  }
}
@mixin phones {
  @media screen and (max-width: 425px) {
    @content;
  }
}

$maxWidth: 1920;
$maxWidthContainer: 1170;

@mixin adaptiv-value($property, $startSize, $minSize, $type) {
  $addSize: $startSize - $minSize;
  @if $type==1 {
    // Только если меньше контейнера
    #{$property}: $startSize + px;
    @media (max-width: #{$maxWidthContainer + px} ) {
      #{$property}: calc(
        #{$minSize + px} + #{$addSize} *
          ((100vw - 320px) / #{$maxWidthContainer - 320})
      );
    }
  } @else if $type==2 {
    // Только если больше контейнера
    #{$property}: $startSize + px;
    @media (min-width: #{$maxWidthContainer + px}) {
      #{$property}: calc(
        #{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320})
      );
    }
  } @else {
    // Всегда
    #{$property}: calc(
      #{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320})
    );
  }
}
.theme--light.v-card,
.theme--light.v-tabs-items {
  background: transparent;
}
.dop-video-wrapper {
  display: flex;
  @include tablets() {
    display: block;
  }
}
.video {
  flex: 0 1 48%;
  padding-bottom: 27.25%;
  position: relative;
  height: 0;
  overflow: hidden;
  border: 20px solid #212224;
  border-radius: 5px;
  @include tablets() {
    border: none;
    padding-bottom: 57.25%;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-width: 0;
    outline-width: 0;
  }

  margin: 40px auto 40px;
}
.static {
  padding: 0 17px;
  @include tablets() {
    display: none;
  }
  p {
    line-height: 1.3;
    color: #0063a7;
    font-weight: 700;
    @include adaptiv-value("font-size", 14, 12, 1);
  }
}
.tabs {
  p {
    line-height: 1.5;
    color: #000;
    @include adaptiv-value("font-size", 18, 13, 1);
  }
}

.event-type {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    padding: 65px 0;
    border-bottom: 2px solid #1974b09c;
    &:last-child {
      border-bottom: none;
    }
    @include tablets() {
      flex-direction: column;
      padding: 15px 0;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__text {
    flex: 0 1 70%;
    color: #000;
    P {
      @include adaptiv-value("font-size", 18, 13, 1);
    }
  }
  &__item {
    order: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 1 24%;
    padding: 25px 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    background: #0064a7;
    color: #fff;
    text-align: center;
    user-select: none;
    @include tablets() {
      margin-bottom: 20px;
    }
    img {
      width: 50%;
      margin-bottom: 20px;
      user-select: none;
      @include tablets() {
        width: 25%;
      }
    }
  }
}

.icon-with-text-wrapper {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @include tablets() {
    flex-direction: column;
  }
  .icon-with-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 1 47%;
    img {
      width: 30%;
      margin-bottom: 40px;
    }
    &__title {
      font-weight: bold;
      font-size: 22px;
    }
  }
}
</style>