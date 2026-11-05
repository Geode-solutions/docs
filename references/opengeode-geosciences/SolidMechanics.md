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

# struct SolidMechanics


 Set when the problem solves quasi-static solid mechanics. Elastic moduli and density are the bulk_modulus, shear_modulus and density PhysicalProperties of the model. With a flow model, the problem is poromechanics: the model also gives the biot_coefficient, the grain_density instead of the density and, for a thermal problem, the thermal_expansion_coefficient. The initial_stress is then the total stress.



## Members

```cpp
public SOLID_MECHANICS_LAW law

```

```cpp
public STRESS_SIGN_CONVENTION sign_convention

```



