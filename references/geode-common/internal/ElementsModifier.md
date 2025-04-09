<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class ElementsModifier


## Functions

### updated_element

```cpp
public const Value & updated_element(index_t element_id)
```


### set_updated_element

```cpp
public void set_updated_element(const MultiMapping<index_t> & mapping)
```


### set_updated_element

```cpp
public void set_updated_element(const Mapping<index_t> & mapping)
```


### clean_elements_modifier

```cpp
public void clean_elements_modifier()
```




