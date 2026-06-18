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

# struct ObjectSamplerConfig

# struct ObjectSamplerConfig


## Members

```cpp
public double move_ratio

```

```cpp
public DistributionDescription length

```

```cpp
public DistributionDescription azimuth

```



# struct ObjectSamplerConfig


## Members

```cpp
public double move_ratio

```



