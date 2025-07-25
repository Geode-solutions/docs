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

# struct SectionExtruderOptions


## Members

```cpp
public local_index_t axis_to_extrude

```

```cpp
public double min_coordinate

```

```cpp
public double max_coordinate

```



## Functions

### SectionExtruderOptions

```cpp
public void SectionExtruderOptions()
```




