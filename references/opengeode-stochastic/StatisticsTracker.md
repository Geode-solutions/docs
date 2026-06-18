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

# class StatisticsTracker


## Functions

### StatisticsTracker

```cpp
public void StatisticsTracker<ObjectType>(const Model<ObjectType> & model)
```


### statiscal_count

```cpp
public index_t statiscal_count()
```


### add_realization

```cpp
public void add_realization(const std::vector<double> & values)
```


### mean

```cpp
public double mean(const uuid & term_uuid)
```


### means

```cpp
public const std::vector<double> & means()
```


### variance

```cpp
public double variance(const uuid & term_uuid)
```


### variances

```cpp
public std::vector<double> variances()
```




