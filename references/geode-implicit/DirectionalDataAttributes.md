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

# struct DirectionalDataAttributes


## Members

```cpp
public basic_string_view vector_attribute_name

```

```cpp
public basic_string_view weight_attribute_name

```



## Functions

### DirectionalDataAttributes

```cpp
public void DirectionalDataAttributes()
```




