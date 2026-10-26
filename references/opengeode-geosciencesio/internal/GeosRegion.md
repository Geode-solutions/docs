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

# struct GeosRegion


 GEOS cell region made of the model cells whose region attribute is id



## Members

```cpp
public index_t id

```

```cpp
public basic_string name

```

```cpp
public basic_string component_name

```

```cpp
public uuid component_id

```



