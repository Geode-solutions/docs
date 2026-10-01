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

# struct Info


## Members

```cpp
public NamedType component_type

```

```cpp
public uuid attribute_id

```



## Functions

### Info

```cpp
public void Info(ComponentType component_type_in, uuid attribute_id_in)
```




