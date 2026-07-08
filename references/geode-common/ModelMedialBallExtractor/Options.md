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

# struct Options


## Members

```cpp
public Angle min_angle

```

```cpp
public bool extract_line_balls

```

```cpp
public bool extract_corner_balls

```



## Functions

### Options

```cpp
public void Options(double angle)
```




