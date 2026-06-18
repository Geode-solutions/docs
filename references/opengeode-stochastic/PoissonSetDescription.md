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

# struct PoissonSetDescription


## Members

```cpp
public basic_string set_name

```

```cpp
public ObjectSamplerConfig<ObjectType> sampler

```

```cpp
public basic_string density_name

```

```cpp
public double lambda

```

```cpp
public optional expected_nb_objects

```

```cpp
public double birth_ratio

```

```cpp
public double death_ratio

```

```cpp
public double change_ratio

```



