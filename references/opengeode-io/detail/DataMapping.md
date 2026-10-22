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

# class DataMapping


## Functions

### DataMapping

```cpp
public void DataMapping(index_t nb_elements, index_t offset)
```


### DataMapping

```cpp
public void DataMapping(absl::Span<const index_t> elements)
```


### nb_elements

```cpp
public index_t nb_elements()
```


### element

```cpp
public index_t element(index_t data_element)
```




