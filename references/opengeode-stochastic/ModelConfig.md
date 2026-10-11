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

# struct ModelConfig


## Members

```cpp
public vector terms

```



## Functions

### unique_term_name

```cpp
public std::string unique_term_name(std::string_view base_name)
```


 Returns base_name if no term uses it yet, otherwise base_name suffixed by the first free index (base_name_2, base_name_3...).

### has_term

```cpp
public bool has_term(std::string_view name)
```




