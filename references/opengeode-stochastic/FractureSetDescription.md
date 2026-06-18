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

# struct FractureSetDescription


## Members

```cpp
public basic_string fset_name

```

```cpp
public ObjectSamplerConfig sampler

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

```cpp
public double p20

```

```cpp
public optional expected_number

```

```cpp
public double p21

```

```cpp
public optional expected_total_length

```

```cpp
public vector observed_fractures

```

```cpp
public double minimal_spacing

```



## Functions

### density_name

```cpp
public std::string density_name()
```


### intensity_name

```cpp
public std::string intensity_name()
```


### spacing_name

```cpp
public std::string spacing_name()
```


### string

```cpp
public std::string string()
```




