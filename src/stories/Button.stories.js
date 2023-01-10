import Button from '../components/Button';

export default {
	title: 'Button',
	component: Button,
};

export const Default = () => <Button />;

export const outline = () => <Button variant='outline' />;

export const text = () => <Button variant='text' />;

export const disableShadow = () => <Button disableShadow />;

export const disabled = () => <Button disabled />;

export const icon = () => <Button startIcon='local_grocery_store' />;

export const small = () => <Button size='sm' />;

export const medium = () => <Button size='md' />;

export const large = () => <Button size='lg' />;

export const defaultColor = () => <Button color='default' />;

export const primary = () => <Button color='primary' />;

export const secondary = () => <Button color='secondary' />;

export const danger = () => <Button color='danger' />;
