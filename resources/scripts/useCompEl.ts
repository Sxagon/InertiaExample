import {ComponentPublicInstance, computed, ComputedRef, ref, Ref} from "vue"

interface CompEl {
    comp: Ref<ComponentPublicInstance | undefined | null>
    el: ComputedRef<HTMLElement | undefined | null>
}

export default function useCompEl(): CompEl {
    const comp = ref<ComponentPublicInstance>()
    const el = computed(() =>
        comp.value && "$el" in comp.value ? comp.value.$el : undefined
    )

    return {comp, el}
}
