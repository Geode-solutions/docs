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

# class PoissonProcessBuilder


# class PoissonProcessBuilder


# class PoissonProcessBuilder


## Functions

### set_domain

```cpp
public void set_domain(const SpatialDomainConfig<ObjectType::dim> & domain_cfg)
```


### add_set

```cpp
public ObjectSetDefinition<ObjectType> & add_set(std::string_view name, double lambda, std::optional<double> expected_count)
```


### build_simulation_context

```cpp
public SimulationContext<ObjectType> build_simulation_context()
```


### expected_statistics

```cpp
public const std::vector<TargetStatisticConfig> & expected_statistics()
```




# class PoissonProcessBuilder


