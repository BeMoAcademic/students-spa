<script>
import { ref, computed } from "vue";
export default {
  name: "FieldMixin",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      id: `label_${this._uid}`
    };
  }
};
</script>