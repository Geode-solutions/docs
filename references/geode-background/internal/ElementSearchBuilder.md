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

# class ElementSearchBuilder


# class ElementSearchBuilder


# class ElementSearchBuilder


## Functions

### ElementSearchBuilder

```cpp
public void ElementSearchBuilder<Mesh>(ElementSearch<Mesh> & element_search)
```


### reinitialize_elements_tree

```cpp
public void reinitialize_elements_tree(const Mesh & mesh)
```




