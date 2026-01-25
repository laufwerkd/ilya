<template>
  <BaseSection height="100" class="d-flex flex-column justify-center">
    <AppGalery />
  </BaseSection>
  <BaseSection height="75" class="pa-3 d-flex flex-column justify-center align-center">
    <BaseCard class="w-100" style="max-width: 800px">
      <h1>Résumé</h1>
      <v-divider />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugit repellendus tempora facilis quas quidem
        officiis maiores quae. Corporis unde nemo ut rem quaerat veniam similique quam asperiores corrupti assumenda.
      </p>
      <BaseCard bg-color="secondary">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident est dolorem harum, necessitatibus
          molestias totam qui. A quibusdam voluptas, reprehenderit molestiae accusamus beatae amet, maiores, ipsam
          perferendis reiciendis molestias sapiente!
        </p>
        <div class="text-end">
          <BaseButton icon="mdi-check" />
        </div>
      </BaseCard>
      <BaseCard bg-color="secondary">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident est dolorem harum, necessitatibus
          molestias totam qui. A quibusdam voluptas, reprehenderit molestiae accusamus beatae amet, maiores, ipsam
          perferendis reiciendis molestias sapiente!
        </p>
      </BaseCard>
      <div class="d-flex ga-3">
        <BaseButton text="Button" color="primary" />
        <BaseButton text="Icon Button" icon="mdi-check" color="primary" />
        <BaseButton icon="mdi-check" color="primary" />
      </div>
      <BaseSelect
        :items="[
          { title: 'Option A', value: 'a' },
          { title: 'Option B', value: 'b' },
        ]"
        label="Select"
      />
      <BaseSelect
        :items="[
          { title: 'Option A', value: 'a' },
          { title: 'Option B', value: 'b' },
        ]"
        label="Icon Select"
        icon="mdi-check"
      />
    </BaseCard>
  </BaseSection>
</template>
