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

# struct OutputSettings


 When results are written, in seconds



## Members

```cpp
public optional frequency

```

```cpp
public vector times

```

```cpp
public bool binary

```

```cpp
public bool restart

```

```cpp
public optional restart_frequency

```



