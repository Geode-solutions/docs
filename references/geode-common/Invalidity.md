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

# struct Invalidity


## Members

```cpp
public MeshElement element

```

```cpp
public InvalidityType invalidities

```



## Functions

### Invalidity

```cpp
public void Invalidity<MeshElement, InvalidityType>(MeshElement element_in, InvalidityType && invalidities_in)
```




