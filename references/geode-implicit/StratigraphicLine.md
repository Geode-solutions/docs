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

# struct StratigraphicLine


## Members

```cpp
public unique_ptr strati_line

```

```cpp
public const geode::Surface2D & adjacent_surface

```



## Functions

### StratigraphicLine

```cpp
public void StratigraphicLine(unique_ptr strati_line_in, const geode::Surface2D & adjacent_surface_in)
```




