<template>
  <TextField v-model="forms.input" label="Title" type="text"></TextField>
  <SelectField :options="options" v-model="forms.select" />
  <CheckboxField v-model="forms.checkbox" label="Catering" />
  <TextareaField v-model="forms.textarea" label="Catering" />

  <button class="btn btn-primary" @click="submit">Save</button>

  <DataTable title="Sample Title" :table-data="currentData" :headers="headers">
    <template #default="{ entry, index }">
      <tr>
        <td>{{entry.name}}</td>
        <td>{{entry.age}}</td>
        </tr>
    </template>
    <template #filters v-if="tableIndex === 0">
      <slot name="filters" />
    </template>
  </DataTable>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      forms: {
        input: "",
        select: "Item 1",
        checkbox: false,
        textarea: "",
      },
      options: ["Item 1", "Item 2", "Item 3"],
      headers: [{ 'name': 'name', title: "Name", filterable: true }, { title: "Age" }],
      currentData: [
        { name: "John Doe", age: 33 },
        { name: "John Doe", age: 33 },
      ],
    };
  },
};
</script>