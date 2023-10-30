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

# struct SurfaceRelaxerOptions


## Members

```cpp
public bool smoothing

```

```cpp
public bool swapping

```

```cpp
public const Metric<2U> * metric

```



# struct SurfaceRelaxerOptions


## Members

```cpp
public bool smoothing

```

```cpp
public bool swapping

```

```cpp
public const Metric<dimension> * metric

```



# struct SurfaceRelaxerOptions


## Members

```cpp
public bool smoothing

```

```cpp
public bool swapping

```

```cpp
public const Metric<3U> * metric

```



