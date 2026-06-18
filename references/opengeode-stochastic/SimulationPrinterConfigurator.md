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

# struct SimulationPrinterConfigurator


## Members

```cpp
public bool print_statistics

```

```cpp
public basic_string statistics_filename

```

```cpp
public bool print_statistics_summary

```

```cpp
public basic_string statistics_summary_filename

```

```cpp
public bool print_realisations

```

```cpp
public basic_string realisations_prefix

```

```cpp
public index_t realisations_print_frequency

```

```cpp
public basic_string output_folder

```



## Functions

### string

```cpp
public std::string string()
```




