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

# struct ElementPoint


## Members

```cpp
public index_t element

```

```cpp
public Point point

```



## Functions

### ElementPoint

```cpp
public void ElementPoint(Point point_in)
```


### ElementPoint

```cpp
public void ElementPoint(index_t element_in, Point point_in)
```



