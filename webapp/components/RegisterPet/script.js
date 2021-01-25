export default {
  data: () => ({
    form: {
      name: '',
      porte: '',
      pet_type: '',
      gender: '',
      age: '',
      phone: '',
      address: {
        city: '',
        state: '',
      },
      pet_owner: {
        id: '8932932',
        name: 'Julio'
      },
      pet_description: ''
    }
  }),
  methods: {
    register(form) {
      this.$emit('registerPet', form);
    }
  },
}