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

# struct Schedule


 Simulated time interval, in seconds



## Members

```cpp
public double start_time

```

```cpp
public double end_time

```

```cpp
public double initial_time_step

```

```cpp
public optional max_time_step

```



