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

# struct SourceTerm


 Constant rate of one fluid component, spread over the cells perforated by a well. Wells are located by the simulator exporter, which knows them by name.



## Members

```cpp
public basic_string well

```

```cpp
public basic_string component

```

```cpp
public double rate

```



